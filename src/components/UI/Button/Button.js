import React from 'react'
import classes from './Button.module.css'

class Button extends React.Component {
	render() {
		return (
			<button
				id={this.props.id}
				className={`${classes.button}`}
				type={this.props.type || 'button'}
				onClick={this.props.onClick}
			>
				{this.props.children}
			</button>
		)
	}
}

export default Button
