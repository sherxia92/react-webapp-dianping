import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import './style.less'

class Footer extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="common-footer">
					<ul className="footer-list">
						<li>
							{
								this.props.app.location === 1
								? <span className="active">首页</span>
								: <Link to="/"><span>首页</span></Link>
							}							
						</li>
						<li>
							{
								this.props.app.location === 2
								? <span className="active">新闻</span>
								: <span>新闻</span>
							}
						</li>
						<li>
							{
								this.props.app.location === 3
								? <span className="active">发现</span>
								: <Link to="/search/all"><span>发现</span></Link>
							}
						</li>
						<li>
							{
								this.props.app.location === 4
								? <span className="active">我的</span>
								: <Link to="/css"><span>我的</span></Link>
							}
						</li>
					</ul>
				</div>
			)
	}
	componentDidMount(){
		
	}
}

function mapStateToProps(state){
	return {
		app:state.app
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)