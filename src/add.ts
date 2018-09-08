import * as S from '@eyedea/syncano'
import {Address} from './types'

interface Args extends Address {}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    await data.PostalAddress.create(args)
    response.json({}, 204)
  }
}

export default ctx => new Endpoint(ctx)
