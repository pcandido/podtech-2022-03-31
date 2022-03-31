import { IndexEngine } from '../services/index-engine'

export class MongoAdapter implements IndexEngine {

  find(): string[] {
    //get
    return ['GE Flamengo', 'Mamilos']
  }

}