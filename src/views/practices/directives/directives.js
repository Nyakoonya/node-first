/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
export default {
  bind(el, binding, vnode) {
    const _opt = binding.value;
    const _items = el.getElementsByClassName(_opt.className);
    if (_opt.curIdx != null) {
      _items[_opt.curIdx].className += ` ${_opt.activeClass}`;
    }
  },

  update(el, binding, vnode) {
    const _opt = binding.value;
    const _oOpt = binding.oldValue;
    const _items = el.getElementsByClassName(_opt.className);
    if (_opt.curIdx != null) {
      _items[_opt.curIdx].className += ` ${_opt.activeClass}`;
    }
    if (_oOpt.curIdx != null) {
      _items[_oOpt.curIdx].className = `${_opt.className}`;
    }
  },
};
