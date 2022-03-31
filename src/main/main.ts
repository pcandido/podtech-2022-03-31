import { ESAdapter } from '../gateway/es'
import { MongoAdapter } from '../gateway/mongo'
import { GetPodcastList } from '../services/get-podcast-list'

function factory() {
  const esIndex = new ESAdapter()
  const mongoIndex = new MongoAdapter()

  const service = new GetPodcastList(mongoIndex)
  return service
}

function run() {

  const service = factory()
  const podcasts = service.getList()
  console.log(podcasts)

}

run()