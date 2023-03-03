import "./tailwind-imports.css";

export const RTL = (Story, context) => {
  return (
    <div dir="rtl">
      <Story />
    </div>
  );
};

export const decorators = [RTL];
