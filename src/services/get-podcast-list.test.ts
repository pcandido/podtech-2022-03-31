import { GetPodcastList } from './get-podcast-list'
import { IndexEngine } from './index-engine'

class IndexEngineStub implements IndexEngine {
  find(): string[] {
    return ['O Assunto', 'GE Flamengo']
  }
}


describe('GetPodcastList', () => {

  it('should return podcast names', () => {
    const indexEngine = new IndexEngineStub()
    const sut = new GetPodcastList(indexEngine)
    const podcasts = sut.getList()
    expect(podcasts).toEqual(['O Assunto', 'GE Flamengo'])
  })

  it('should return podcasts from index engine', () => {
    const indexEngine = new IndexEngineStub()
    jest.spyOn(indexEngine, 'find').mockReturnValueOnce(['O Assunto', 'A Mão Armada'])
    const sut = new GetPodcastList(indexEngine)
    const podcasts = sut.getList()
    expect(podcasts).toEqual(['O Assunto', 'A Mão Armada'])
  })

})