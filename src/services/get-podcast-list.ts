import { IndexEngine } from './index-engine'

export class GetPodcastList {

  constructor(
    private indexEngine: IndexEngine
  ) { }

  getList() {
    return this.indexEngine.find()
  }

}