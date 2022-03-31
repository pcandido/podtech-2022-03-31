import { IndexEngine } from '../services/index-engine'

export class ESAdapter implements IndexEngine {

  find(): string[] {
    //get
    return ['Mamilos', 'O Assunto']
  }

}