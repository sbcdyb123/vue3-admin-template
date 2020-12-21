import './index.less'

import { PropType } from 'vue'
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  nextTick,
  unref,
  computed,
  CSSProperties,
} from 'vue'
import Iconify from '@purge-icons/generated'
// import { isString } from '';
// import { propTypes } from '@/utils/propTypes';
// console.log(Iconify , 'svg')
import { isString } from 'lodash-es'
export default defineComponent({
  name: 'GIcon',
  props: {
    // icon name
    icon: String,
    // icon color
    color: String,
    // icon size
    size: {
      type: [String, Number] as PropType<string | number>,
      default: 16,
    },
    prefix: {
      type: String,
      defalut: '',
    },
  },
  setup(props, { attrs }) {
    const elRef = ref<ElRef>(null)

    const getIconRef = computed(() => {
      const { icon, prefix } = props
      return `${prefix ? prefix + ':' : ''}${icon}`
    })

    const update = async () => {
      const el = unref(elRef)
      if (el) {
        await nextTick()
        const icon = unref(getIconRef)
        console.log(Iconify.renderSVG)

        const svg = Iconify.renderSVG(icon, {})

        if (svg) {
          el.textContent = ''
          el.appendChild(svg)
        } else {
          const span = document.createElement('span')
          span.className = 'iconify'
          span.dataset.icon = icon
          el.textContent = ''
          el.appendChild(span)
        }
      }
    }

    const wrapStyleRef = computed(
      (): CSSProperties => {
        const { size, color } = props
        let fs = size
        if (isString(size)) {
          fs = parseInt(size, 10)
        }
        return {
          fontSize: `${fs}px`,
          color,
          display: 'inline-flex',
        }
      }
    )

    watch(() => props.icon, update, { flush: 'post' })

    onMounted(update)

    return () => (
      <span ref={elRef} class={[attrs.class, 'app-iconify anticon']} style={unref(wrapStyleRef)} />
    )
  },
})
