import Input from "./Input";

export default function Inputs({ values, onInputValuesChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial investment"
          values={values}
          onInputValueChange={onInputValuesChange}
        />
        <Input
          label="Annual investment"
          values={values}
          onInputValueChange={onInputValuesChange}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected return"
          values={values}
          onInputValueChange={onInputValuesChange}
        />
        <Input
          label="Duration"
          values={values}
          onInputValueChange={onInputValuesChange}
        />
      </div>
    </section>
  );
}
