import Taro, { Component } from '@tarojs/taro'

import { View } from '@tarojs/components'

import './dailog.less'

export default class Dailog extends Component {
    render() {
        return (
        <View className='dailog'>{this.props.children}</View>
        )
    }
}