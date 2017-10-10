import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import drinks from './data/drinks';
import pubs from './data/pubs';
import { sample, sampleSize } from 'lodash';

const mock = new MockAdapter(axios, { delayResponse: 200 });

const initMockApi = () => {
    mock.onGet('/pubs').reply(200, pubs);

    mock.onGet(/\/pubs\/.+/).reply(200, {
        ...sample(pubs),
        drinks: sampleSize(drinks, Math.floor(Math.random() *4) + 3)
    });
};

export default initMockApi;
