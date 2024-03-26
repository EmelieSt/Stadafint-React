import { collection, getDocs, orderBy, query} from "firebase/firestore";
import { db } from "../../firestore.config";

export interface IBooking {
  id: string;
  datum: string;
  tid: string;
  kund: string;
  level: string;
  cleaner: string;
  status: boolean;
}
  export const getBookings = async () => {
      const q = query(collection(db, "bokningar"), orderBy("datum", "asc"));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map<IBooking>((doc) => ({
        ...(doc.data() as IBooking),
        id: doc.id
    }));
    };

