const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'


Vue.config.productionTip = false
Vue.config.devtools = false
//测试用例
describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok //不是undefined null 0 '',就是存在的
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy
    })
})
