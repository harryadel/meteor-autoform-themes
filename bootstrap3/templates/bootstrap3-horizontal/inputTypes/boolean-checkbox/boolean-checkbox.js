Template["afCheckbox_bootstrap3-horizontal"].helpers({
  attsPlusSpecialClass: function () {
    var atts = { ...this.atts };
    atts = AutoForm.Utility.addClass(atts, "autoform-checkbox-margin-fix");
    return atts;
  },
  useLeftLabel: function () {
    return this.atts.leftLabel;
  }
});
