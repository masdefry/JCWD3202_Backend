import { Request, Response } from 'express';
import db from '../connection';
import { promisify } from 'util';
const query = promisify(db.query).bind(db);

export const findPassengers = async (req: Request, res: Response) => {
  try {
    const findPassengers = await query({ sql: 'SELECT * FROM passengers' });

    res.status(200).json({
      success: true,
      message: 'Get Passengers Success',
      data: findPassengers,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPassenger = async (req: Request, res: Response) => {
  try {
    const {
      Survived,
      Pclass,
      Name,
      Sex,
      Age,
      SibSp,
      Parch,
      Ticket,
      Fare,
      Cabin,
      Embarked,
    } = req.body;

    const findPassengers = await query({
      sql: 'SELECT PassengerId from passengers ORDER BY PassengerId DESC',
    });

    console.log(findPassengers);

    await query({
      sql: `INSERT INTO passengers(PassengerId, Survived,
      Pclass,
      Name,
      Sex,
      Age,
      SibSp,
      Parch,
      Ticket,
      Fare,
      Cabin,
      Embarked) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      values: [
        parseInt(findPassengers[0].PassengerId) + 1,
        Survived,
        Pclass,
        Name,
        Sex,
        Age,
        SibSp,
        Parch,
        Ticket,
        Fare,
        Cabin,
        Embarked,
      ],
    });

    res.status(201).json({
      success: true,
      message: 'Create Passenger Success',
      data: {
        Survived,
        Pclass,
        Name,
        Sex,
        Age,
        SibSp,
        Parch,
        Ticket,
        Fare,
        Cabin,
        Embarked,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePassenger = async (req: Request, res: Response) => {
  try {
    const {
      Survived,
      Pclass,
      Name,
      Sex,
      Age,
      SibSp,
      Parch,
      Ticket,
      Fare,
      Cabin,
      Embarked,
    } = req.body;
    const { passengerId } = req.params;

    await query({
      sql: `UPDATE passengers SET Survived = ?,
      Pclass = ?,
      Name = ?,
      Sex = ?,
      Age = ?,
      SibSp = ?,
      Parch = ?,
      Ticket = ?,
      Fare = ?,
      Cabin = ?,
      Embarked = ? WHERE PassengerId = ?`,
      values: [
        Survived,
        Pclass,
        Name,
        Sex,
        Age,
        SibSp,
        Parch,
        Ticket,
        Fare,
        Cabin,
        Embarked,
        passengerId
      ],
    })

    res.status(200).json({
      success: true, 
      message: `Update Passenger with Id ${passengerId} Success`, 
      data: null
    })
  } catch (error) {
    console.log(error)
  }
};

export const deletePassenger = async(req: Request, res: Response) => {
  try {
    const {passengerId} = req.params 

    const findPassenger = await query({
      sql: `SELECT * FROM passengersss WHERE PassengerId = ?`, 
      values: [passengerId]
    })

    if(findPassenger.length === 0) throw { isExpose: true, message: `Passenger with Id ${passengerId} Not Found` }

    await query({
      sql: 'DELETE FROM passengers WHERE PassengerId = ?', 
      values: [passengerId]
    })

    res.status(200).json({
      success: true, 
      message: `Delete Passenger with Id ${passengerId} Success`, 
      data: null
    })
  } catch (error) {
    res.status(500).json({
      success: false, 
      message: error.isExpose? error.message : 'Something Went Wrong!',
      data: null
    })
  }
}
