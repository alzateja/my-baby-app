import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import EventRow from '../EventRow';

export interface EventTableProps {
  events: any;
  editMethod: any;
  deleteMethod: any;
  typeOptions: any;
}

const EventTable = ({
  editMethod,
  events,
  deleteMethod,
  typeOptions,
}: EventTableProps): JSX.Element => {
  if (!events.length) {
    return <h4>There are currently no events logged for this user</h4>;
  }

  return (
    <>
      <Container fluid className="panel-border">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event: any) => (
              <EventRow
                key={event.diaperId || event.feedingId}
                id={event.diaperId || event.feedingId}
                type={event.type}
                date={event.date}
                deleteEvent={deleteMethod(event.diaperId || event.feedingId)}
                editEvent={editMethod(event.diaperId || event.feedingId)}
                typeOptions={typeOptions}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default EventTable;
