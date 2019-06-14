import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.test.js', () => {
  let wrapper, vm

  beforeEach(() => {
    wrapper = mount(App, {
      data: () => ({
        // Replace data value with this fake data
        number: 1
      })
    })
    vm = wrapper.vm
  })

  it('equals number to be 1', () => {
    expect(vm.number).toEqual(1)
  })

  it('has the expected html structure', () => {
    expect(vm.$el).toMatchSnapshot()
  })

  it('click event', () => {
    const container = wrapper.find('button')
    container.trigger('click')
    expect(vm.$el).toMatchSnapshot()
  })
})
