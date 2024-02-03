import OpenAI from 'openai';
import { OPENAI_API_KEY } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY || 'My API Key',
  dangerouslyAllowBrowser: true,
});

export default openai;
