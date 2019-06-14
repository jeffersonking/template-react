import './Index.scss'
import * as React from 'react'
import {Component} from 'react'
import * as ReactDOM from 'react-dom'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

@observer export class Index extends Component {
	@observable message = 'Hello World'
	render() {
		return this.message
	}
}

const root = document.createElement('div')
root.id = 'react'
document.body.appendChild(root)
ReactDOM.render(<Index />, root)
