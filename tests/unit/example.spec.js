import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloI18n.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      mocks: {
        $t: () => {},
      },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
