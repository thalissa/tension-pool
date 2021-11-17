export class TensionLayer extends CanvasLayer {
  constructor() {
      super();
      
      this.loader = new PIXI.Loader();

      this.mouseInteractionManager = null;

      this._interactiveChildren = false;
      this._dragging = false;

      this.options = this.constructor.layerOptions;
      
      this._controlled = {};
  }
}
