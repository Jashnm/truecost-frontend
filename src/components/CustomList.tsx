import VirtualList from "react-tiny-virtual-list";

const CustomList = (data: any[]) => {
  return (
    <VirtualList
      width="100%"
      height={400}
      //@ts-ignore
      itemCount={data["children"].length}
      itemSize={40} // Also supports variable heights (array or function getter)
      renderItem={({ index, style }) => (
        <div
          key={index}
          className={`react-select__option text-sm truncate`}
          style={style}
        >
          {/* @ts-ignore */}
          {data["children"][index]}
        </div>
      )}
    />
  );
};

export default CustomList;

// export const Option: React.FC<{
//   children: ReactNode;
//   isSelected: boolean;
//   innerProps: any;
// }> = ({ children, isSelected, innerProps }) => (
//   <div
//     className={`react-select__option ${
//       isSelected && "react-select__option_selected"
//     }`}
//     id={innerProps.id}
//     tabIndex={innerProps.tabIndex}
//     onClick={innerProps.onClick}
//   >
//     {children}
//   </div>
// );
