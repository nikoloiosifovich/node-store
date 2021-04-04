import { app } from '../src/app.js'
import '../src/database/nodeStoreDb.js'

app.listen(app.get('port'), () => {
  console.log('Server running:', app.get('port'))
})
