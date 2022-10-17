interface BikeRideProps {
  id: string;
  name: string;
  start_date: Date;
  start_date_registration: Date
  end_date_registration: Date
  additional_information?: string
  start_place: string
  participants_limit?: number
}


export class BikeRide {

  private props: BikeRideProps

  constructor(props: BikeRideProps) {
    const { start_date_registration, end_date_registration } = props;

    if(end_date_registration <= start_date_registration) {
      throw new Error("Invalid end date!")
    }

    this.props = props;
  }

  public get id(): string {
    return this.props.id
  }

  public get name(): string {
    return this.props.name
  }

  public get startDate(): Date {
    return this.props.start_date;
  }

  public get startDateRegistration(): Date {
    return this.props.start_date_registration;
  }

  public get endDateRegistration(): Date {
    return this.props.end_date_registration;
  }

  public get additionalInformation(): string | undefined {
    return this.props.additional_information;
  }

  public get startPlace(): Date {
    return this.props.start_date
  }

  public get participantsLimit(): number | undefined {
    return this.props.participants_limit
  }


}
