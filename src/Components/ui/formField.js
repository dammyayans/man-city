import React from "react";

const formField = ({ formdata, id, change }) => {
  const showError = () => {
    let errormsg = (
      <div className="error_label">
        {formdata.validation && !formdata.valid
          ? formdata.validationMessage
          : null}
      </div>
    );
    return errormsg;
  };
  const renderTemplate = () => {
    let formTemplate = null;
    switch (formdata.element) {
      case "input":
        formTemplate = (
          <div>
            {formdata.showLabel ? (
              <div className="label_inputs">{formdata.config.label}</div>
            ) : null}
            <input
              {...formdata.config}
              value={formdata.value}
              onChange={e => change({ e, id })}
            />
            {showError()}
          </div>
        );
        break;
      case "select":
        formTemplate = (
          <div>
            {formdata.showLabel ? (
              <div className="label_inputs">{formdata.config.label}</div>
            ) : null}
            <select value={formdata.value} onChange={e => change({ e, id })}>
              <option value="">select one</option>
              {formdata.config.options.map(item => (
                <option key={item.key} value={item.key}>
                  {item.key}
                </option>
              ))}
            </select>
            {showError()}
          </div>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };
  return <div>{renderTemplate()}</div>;
};
export default formField;
