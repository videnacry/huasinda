import Indexer from './indexer'

import First from './first'
import Second from './second'
import Third from './third'
import Fourth from './fourth'
import Fifth from './fifth'
import Sixth from './sixth'
import Seventh from './seventh'

const pages = [First, Second, Third, Fourth, Fifth, Sixth, Seventh]
pages[-1] = Indexer

export default pages