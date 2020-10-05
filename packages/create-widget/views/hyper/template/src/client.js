import hyper from 'hyperhtml';
import { createMerkurWidget, createMerkur } from '@merkur/core';
import { widgetProperties } from './widget';
import style from './style.css'; // eslint-disable-line no-unused-vars

function createWidget(widgetParams) {
  return createMerkurWidget({
    ...widgetProperties,
    ...widgetParams,
    $dependencies: {
      bind: hyper.bind,
      wire: hyper.wire,
    },
    mount(widget) {
      widget.$external.render = widget.$dependencies.bind(
        document.querySelector(widget.props.containerSelector)
      );
      return widget.View(widget.$external.render);
    },
    unmount(widget) {
      document.querySelector(widget.props.containerSelector).innerHTML = '';
    },
    update(widget) {
      widget.View(widget.$external.render);
    },
  });
}

const merkur = createMerkur();
merkur.register({
  ...widgetProperties,
  createWidget,
});
