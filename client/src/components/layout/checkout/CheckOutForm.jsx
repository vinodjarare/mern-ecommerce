import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import { Country, State } from "country-state-city";
import Button from "../Button";
import { toast } from "react-toastify";
import { saveShippingInfo } from "../../../redux/action/cartAction";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [countries, setCountries] = useState(shippingInfo.country || "");
  const [state, setState] = useState(shippingInfo.state || "");
  const [countryOptions, setCountryOptions] = useState([]);
  const [stateOptions, setStateOptions] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      address: shippingInfo.address,
      city: shippingInfo.city,
      pinCode: parseInt(shippingInfo.pinCode), // Convert pinCode to integer
      phoneNo: parseInt(shippingInfo.PhoneNo), // Convert PhoneNo to integer
      country: shippingInfo.country,
      state: shippingInfo.state,
    },
  });

  const shippingSubmit = (data) => {
    if (data.phoneNo.length < 10 || data.phoneNo.length > 10) {
      toast.error("Phone Number should be 10 digits Long");
      return;
    }

    const shippingInfo = {
      ...data,
      country: countries,
      state: state,
    };

    dispatch(saveShippingInfo(shippingInfo));
    navigate("/checkout/payment");
  };

  const onCountryChange = (value) => {
    setCountries(value);
  };

  const onStateChange = (value) => {
    setState(value);
  };

  const fetchCountries = async () => {
    const countries = await Country.getAllCountries();
    const options = countries.map((country) => ({
      label: country.name,
      value: country.isoCode,
    }));
    setCountryOptions(options);
  };

  const fetchStates = () => {
    const states = State.getStatesOfCountry(
      typeof countries === "string" ? countries : countries.value
    );
    const options = states.map((state) => ({
      label: state.name,
      value: state.isoCode,
    }));
    setStateOptions(options);
  };

  useEffect(() => {
    fetchCountries();
    fetchStates();
  }, [countries]);

  return (
    <>
      <div className="w-full h-full">
        <div className="box-border w-[80%] mx-auto my-10">
          <h2 className="text-xl font-semibold capitalize leading-3">
            Shipping Details
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit(shippingSubmit)}>
            <Input
              id="address"
              type="text"
              register={register}
              required
              label="Address"
              errors={errors}
            />
            <Input
              id="city"
              type="text"
              register={register}
              required
              label="City"
              errors={errors}
            />
            <Input
              id="pinCode"
              type="number"
              register={register}
              required
              label="Pin Code"
              errors={errors}
            />
            <Input
              id="phoneNo"
              type="number"
              register={register}
              required
              label="Phone Number"
              errors={errors}
            />
            <Select
              label="Country"
              value={countries}
              onChange={onCountryChange}
              options={countryOptions}
              register={register}
              required
              name="country"
              errors={errors}
            />
            {countries && (
              <Select
                label="State"
                value={state}
                onChange={onStateChange}
                options={stateOptions}
                register={register}
                required
                name="state"
                errors={errors}
              />
            )}

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
