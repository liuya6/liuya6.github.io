class Observer {
  public el: any = {};

  $on(type: string, fn: Function) {
    if (!this.el.hasOwnProperty(type)) {
      this.el[type] = [];
      this.el[type].push(fn);
    } else {
      if (!this.el[type].includes(fn)) {
        this.el[type].push(fn);
      }
    }
  }

  $emit(type: string, message: any) {
    if (this.el.hasOwnProperty(type)) {
      this.el[type].forEach((fn: Function) => {
        fn.call(this, message);
      });
    }
  }

  $off(type: string) {
    if (this.el.hasOwnProperty(type)) {
      delete this.el[type];
    }
  }
}
const observer = new Observer();

export { observer };
