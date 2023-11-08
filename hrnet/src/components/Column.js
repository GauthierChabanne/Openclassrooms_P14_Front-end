import { format, formatISO } from "date-fns";

export const AllColumns = [
  {
    Header: "ID",
    accessor: "ID",
  },
  {
    Header: "Name",
    columns: [
      {
        Header: "First name",
        accessor: "prénom",
      },
      {
        Header: "Last Name",
        accessor: "nom",
      },
    ],
  },

  {
    Header: "Infos",
    columns: [
      {
        Header: "Start Date",
        accessor: (row) => formatISO(new Date(row.départ)),
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Department",
        accessor: "departement",
      },
      {
        Header: "Date of Birth",
        accessor: (row) => formatISO(new Date(row.birth)),
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "Street",
        accessor: "rue",
      },
      {
        Header: "City",
        accessor: "ville",
      },
      {
        Header: "State",
        accessor: "etat",
      },
      {
        Header: "Zipcode",
        accessor: "zip",
      },
    ],
  },
];
