import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import { ICON_URL } from "../constants";


export type Props = {
  date: number;
  temperature: number;
  description: string;
  icon:string;
};
export default function DayCard(props: Props) {
  const { date, temperature, description, icon } = props;


  const useStyles = makeStyles({
    card: {
      minWidth: 220,
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      border: "1px solid rgba(255, 255, 255, 0.6)",
      color: "#196090",
      margin: "1% 1%"
    }
  });
  const classes = useStyles();
  //Determinning day from date
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const dayName: string = days[new Date(1000 * date).getDay()];
  const cardDate = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  }).format(new Date(1000 * date));

  return (
    <Card className={classes.card}>
        <CardContent>
          <Box fontWeight="fontWeightBold" letterSpacing={3} fontSize={28}>
            {dayName}
          </Box>
          <Box fontSize={16}>{cardDate}</Box>
          <hr />
          <Box fontWeight="fontWeightBold" fontSize={36}>
            {temperature} <img src={`${ICON_URL + icon}.png`} alt="weather icon" />
          </Box>
          <hr />
          <Box style = {{whiteSpace: 'nowrap'}} fontWeight="fontWeightBold" fontSize={20}>
          {description}
          </Box>
        </CardContent>
    </Card>
  );
}