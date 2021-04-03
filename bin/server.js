import { app } from '../src/app.js'

app.listen(app.get('port'), () => {
  console.log('Server running:', app.get('port'))
})
