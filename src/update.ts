import * as S from '@eyedea/syncano'
import {Address} from './types'

interface Args extends Address {
  id: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response, data}: S.Core,
    {args}: S.Context<Args>
  ) {
    const params = Object.assign({}, args)
    delete params.id

    const updatedAddress = await data.PostalAddress.update(args.id, params)
    response.json(updatedAddress, 204)
  }
}

export default ctx => new Endpoint(ctx)
