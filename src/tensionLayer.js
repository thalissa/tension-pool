export class TensionLayer extends NotesLayer {
  static get layerOptions() {
    return foundry.utils.mergeObject(super.layerOptions, {
      canDragCreate: false,
      zIndex: 180,
      name: "tensionlayer"
    });
  }
}
