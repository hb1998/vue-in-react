<template>
  <BasicPure :foo="foo">
    <div>
      the children
    </div>
  </BasicPure>
</template>
<script>
import {applyReactInVue, applyPureReactInVue} from 'veaury'
// This is a React component
import BasicReactComponent from './react_app/Basic.jsx'
import {ref} from 'vue'

export default {
  components: {
    // Use HOC 'applyReactInVue' or 'applyPureReactInVue'
    Basic: applyReactInVue(BasicReactComponent), 
    BasicPure: applyPureReactInVue(BasicReactComponent)
  },
  setup() {
    return {
      foo: ref('Hello!')
    }
  }
}
</script>