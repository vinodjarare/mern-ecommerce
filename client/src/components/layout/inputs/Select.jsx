import ReactSelect from "react-select";

const Select = ({ label, value, onChange, options, disabled }) => {
  const selectedOption = options.find((option) => option.value === value);

  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
  };

  console.log(value);

  return (
    <div className="z-[100]">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <ReactSelect
          isDisabled={disabled}
          value={selectedOption}
          onChange={handleChange}
          isMulti={false}
          options={options}
          menuPortalTarget={document.body}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          }}
          classNamePrefix="react-select"
        />
      </div>
    </div>
  );
};

export default Select;
