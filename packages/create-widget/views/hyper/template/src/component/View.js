import Welcome from './Welcome';
import Counter from './Counter';
import WidgetDescription from './WidgetDescription';
import ErrorView from './ErrorView';

export default function View(widget, render) {
  if (widget.error && widget.error.status) {
    return render`${ErrorView(widget)}`;
  }

  return render`
      <div class='merkur__page'>
        <div class='merkur__headline'>
          <div class='merkur__view'>
            ${Welcome(widget)}
            ${WidgetDescription(widget)}
          </div>
        </div>
        <div class='merkur__view'>
          ${Counter(widget)}
        </div>
      </div>
  `;
}
