// import React, { useState } from "react";
// import {
//     CSmartTable,
//     CAvatar,
//     CBadge,
//     CButton,
//     CCollapse,
//     CCardBody,
// } from "@coreui/react-pro";

// const MySmartTable = () => {
//     const [details, setDetails] = useState([]);
//     const columns = [
//         {
//             key: "avatar",
//             label: "",
//             filter: false,
//             sorter: false,
//         },
//         {
//             key: "name",
//             _style: { width: "20%" },
//         },
//         {
//             key: "registered",
//             sorter: (a, b) => {
//                 const date1 = new Date(a.registered);
//                 const date2 = new Date(b.registered);
//                 return date1 - date2;
//             },
//         },
//         {
//             key: "role",
//             _style: { width: "20%" },
//         },
//         "status",
//         {
//             key: "show_details",
//             label: "",
//             _style: { width: "1%" },
//             filter: false,
//             sorter: false,
//         },
//     ];

//     const items = [
//         {
//             id: 1,
//             name: "Samppa Nori",
//             avatar: "1.jpg",
//             registered: "2021/03/01",
//             role: "Member",
//             status: "Active",
//         },
//         {
//             id: 5,
//             name: 'Friderik Dávid',
//             avatar: '5.jpg',
//             registered: '2022/03/25',
//             role: 'Staff',
//             status: 'Active'
//         },
//         {
//             id: 6,
//             name: 'Yiorgos Avraamu',
//             avatar: '6.jpg',
//             registered: '2017/01/01',
//             role: 'Member',
//             status: 'Active'
//         },
//         {
//             id: 7,
//             name: 'Avram Tarasios',
//             avatar: '7.jpg',
//             registered: '2016/02/12',
//             role: 'Staff',
//             status: 'Banned',
//             _selected: true
//         },
//         {
//             id: 8,
//             name: 'Quintin Ed',
//             avatar: '8.jpg',
//             registered: '2023/01/21',
//             role: 'Admin',
//             status: 'Inactive'
//         },
//         {
//             id: 9,
//             name: 'Enéas Kwadwo',
//             avatar: '9.jpg',
//             registered: '2024/03/10',
//             role: 'Member',
//             status: 'Pending'
//         },
//         {
//             id: 10,
//             name: 'Agapetus Tadeáš',
//             avatar: '10.jpg',
//             registered: '2015/01/10',
//             role: 'Staff',
//             status: 'Active'
//         },
//         {
//             id: 11,
//             name: 'Carwyn Fachtna',
//             avatar: '11.jpg',
//             registered: '2014/04/01',
//             role: 'Member',
//             status: 'Active'

//         },
//         // (other items here)
//     ];

//     const getBadge = (status) => {
//         switch (status) {
//             case "Active":
//                 return "success";
//             case "Inactive":
//                 return "secondary";
//             case "Pending":
//                 return "warning";
//             case "Banned":
//                 return "danger";
//             default:
//                 return "primary";
//         }
//     };

//     const toggleDetails = (index) => {
//         const position = details.indexOf(index);
//         const newDetails = [...details];
//         if (position !== -1) {
//             newDetails.splice(position, 1);
//         } else {
//             newDetails.push(index);
//         }
//         setDetails(newDetails);
//     };

//     return (
//         <CSmartTable
//             activePage={2}
//             cleaner
//             clickableRows
//             columns={columns}
//             columnFilter
//             columnSorter
//             footer
//             items={items}
//             itemsPerPageSelect
//             itemsPerPage={5}
//             pagination
//             onFilteredItemsChange={(filteredItems) => {
//                 console.log(filteredItems);
//             }}
//             onSelectedItemsChange={(selectedItems) => {
//                 console.log(selectedItems);
//             }}
//             scopedColumns={{
//                 avatare: (item) => (
//                     <td>
//                         <CAvatar src={`/images/avatars/${item.avatar}`} />
//                     </td>
//                 ),
//                 registered: (item) => {
//                     const date = new Date(item.registered);
//                     const options = {
//                         year: "numeric",
//                         month: "long",
//                         day: "numeric",
//                     };
//                     return <td>{date.toLocaleDateString("en-US", options)}</td>;
//                 },
//                 status: (item) => (
//                     <td>
//                         <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
//                     </td>
//                 ),
//                 show_details: (item) => (
//                     <td className="py-2">
//                         <CButton
//                             color="primary"
//                             variant="outline"
//                             shape="square"
//                             size="sm"
//                             onClick={() => toggleDetails(item.id)}
//                         >
//                             {details.includes(item.id) ? "Hide" : "Show"}
//                         </CButton>
//                     </td>
//                 ),
//                 details: (item) => (
//                     <CCollapse visible={details.includes(item.id)}>
//                         <CCardBody className="p-3">
//                             <h4>{item.name}</h4>
//                             <p className="text-body-secondary">
//                                 User since: {item.registered}
//                             </p>
//                             <CButton size="sm" color="info">
//                                 User Settings
//                             </CButton>
//                             <CButton size="sm" color="danger" className="ms-1">
//                                 Delete
//                             </CButton>
//                         </CCardBody>
//                     </CCollapse>
//                 ),
//             }}
//             selectable
//             sorterValue={{ column: "status", state: "asc" }}
//             tableFilter
//             tableProps={{
//                 className: "add-this-class",
//                 responsive: true,
//                 striped: true,
//                 hover: true,
//             }}
//             tableBodyProps={{
//                 className: "align-middle",
//             }}
//         />
//     );
// };

// export default MySmartTable;
