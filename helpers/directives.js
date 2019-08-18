export function clickOutside() {
  return {
    bind: (el, binding, vNode) => {
      // Provided expression must evaluate to a function.
      if (typeof binding.value !== 'function') {
        const compName = vNode.context.name;
        let warn = `[Vue-click-outside:] The expression you provided '${binding.expression}' is not a function type, but has to be`;
        if (compName) {
          warn += `Found in component '${compName}'`;
        }
        console.warn(warn);
      }
      // Define Handler and cache it on the element
      const {
        bubble
      } = binding.modifiers;
      const handler = (e) => {
        if (bubble || (!el.contains(e.target) && el !== e.target)) {
          binding.value(e);
        }
      };
      el.vueClickOutside = handler;

      // add Event Listeners
      document.addEventListener('click', handler);
    },

    unbind: (el) => {
      // Remove Event Listeners
      document.removeEventListener('click', el.vueClickOutside);
      el.vueClickOutside = null;
    }
  }
}
