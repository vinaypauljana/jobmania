export const AdminRoutes = [
  {
    path: "/admin",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "admin",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
];
