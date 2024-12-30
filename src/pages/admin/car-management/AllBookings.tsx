import { useGetAllBookingsQuery } from "../../../redux/features/admin/bookingManagement.api";

const AllBookings = () => {
  const { data: bookings } = useGetAllBookingsQuery(undefined);
  console.log(bookings);

  return <div>all bookings</div>;
};

export default AllBookings;
