import { act, renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { SUCCESS, ERROR, FETCHING, useApiEffects } from '.';

describe('#useApiEffects', () => {
  let mock, url, payload;
  const resGet = [{ id: 1, name: 'moo' }];

  const resPost = [{ id: 'xxx', name: 'moo-foo' }];

  beforeAll(() => {
    mock = new MockAdapter(axios);
    url = '/moos';
    payload = { a: '', b: '' };
    mock.onGet(url).reply(200, {
      data: resGet,
    });
    mock.onPost(url).reply(200, {
      data: resPost,
    });
    mock.onPut(url).reply(204);
    mock.onPatch(url).reply(204);
    mock.onDelete(url).reply(200);
    mock.onGet(`${url}/error`).reply(500);
  });

  it('#get', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiEffects(axios, url)
    );
    expect(result.current.status).toEqual(FETCHING);
    await waitForNextUpdate();
    expect(result.current.status).toEqual(SUCCESS);
    expect(result.current.response.data).toEqual(resGet);
    expect(result.current.exception).toEqual(null);
  });

  it('#post', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiEffects(axios, url, { verb: 'post', payload })
    );
    expect(result.current.status).toEqual(FETCHING);
    await waitForNextUpdate();
    expect(result.current.status).toEqual(SUCCESS);
    expect(result.current.response.data).toEqual(resPost);
    expect(result.current.exception).toEqual(null);
  });

  it('#put', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiEffects(axios, url, { verb: 'put', payload })
    );
    expect(result.current.status).toEqual(FETCHING);
    await waitForNextUpdate();
    expect(result.current.status).toEqual(SUCCESS);
    expect(result.current.response).toEqual(undefined);
    expect(result.current.exception).toEqual(null);
  });

  it('#patch', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiEffects(axios, url, { verb: 'patch', payload })
    );
    expect(result.current.status).toEqual(FETCHING);
    await waitForNextUpdate();
    expect(result.current.status).toEqual(SUCCESS);
    expect(result.current.response).toEqual(undefined);
    expect(result.current.exception).toEqual(null);
  });

  it('#delete', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiEffects(axios, url, { verb: 'delete' })
    );
    expect(result.current.status).toEqual(FETCHING);
    await waitForNextUpdate();
    expect(result.current.status).toEqual(SUCCESS);
    expect(result.current.response).toEqual(undefined);
    expect(result.current.exception).toEqual(null);
  });

  it('#error', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useApiEffects(axios, `${url}/error`)
    );
    expect(result.current.status).toEqual(FETCHING);
    await waitForNextUpdate();
    expect(result.current.status).toEqual(ERROR);
    expect(result.current.response.status).toEqual(500);
  });
});
