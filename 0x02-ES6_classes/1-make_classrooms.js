import Classroom from './0-classroom';

export default function initializeRooms() {
  const rooms = [];
  rooms.push(new Classroom(19), new Classroom(20), new Classroom(34));

  return rooms;
}
