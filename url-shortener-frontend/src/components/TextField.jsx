const TextField = ({
  label,
  id,
  type,
  errors,
  register,
  required,
  message,
  className,
  min,
  placeholder
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label 
        htmlFor={id}
        className={`${className ? className : ''} font-semibold text-md`}
      >
        {label}
      </label>
      <input 
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${className ? className : ''} border rounded-md text-slate-700 px-2 py-2 outline-none ${errors[id]?.message ? "border-red-700" : "border-slate-600"}`}
        {...register(id, { 
          required: {
            value: required,
            message
          },
          minLength: min 
            ? {
              value: min, 
              message: "Minimum ${min} characters required" }
            : undefined,
          pattern:
              type === "email"
                ? {
                  value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+com+$/,
                  message: "Invalid email"
                }
                : type === "url"
                ? {
                  value: /^(https?:\/\/)?(([a-zA-Z0-9\u00a1-\uffff-]+\.)+[a-zA-Z\u00a1-\uffff]{2,})(:\d{2,5})?(\/[^\s]*)?$/,
                  message: "Please enter a valid URL"
                }
                : undefined
        })}
      />
      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-700 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
}

export default TextField