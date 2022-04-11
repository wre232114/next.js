import nonIsomorphicText from 'non-isomorphic-text'
import { cjsText as CjsText } from 'cjs-dep'

export default function Page() {
  console.log('CjsText', CjsText)
  return (
    <div>
      <div>{nonIsomorphicText()}</div>
      <div>
        <CjsText />
      </div>
    </div>
  )
}
