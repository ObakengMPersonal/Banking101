import {Routes, Route, Navigate } from "react-router-dom"

import AppLayout from "../components/layouts/AppLayout.tsx"
import ProtectedRoute from "./ProtectedRoute"

{/* Authentication */}
import Login from "../pages/Auth/Login"
import Register from "../pages/Auth/Register"

{/* Pages */}
import Dashboard from "../pages/Dashboard/Dashboard"
import CardPage from "../pages/Cards/CardPage"
import ExpensePage from "../pages/Expense/ExpensePage"
import IncomePage from "../pages/Income/IncomePage"
import ReportsPage from "../pages/Reports/ReportsPage"
import ForecastPage from "../pages/Forecast/ForcastPage"

import NotFound from "../pages/NotFound.tsx"

export default function AppRoutes(){
    return(
        <Routes>
                {/*Public Routes */}
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Register" element={<Register/>}/>

                {/*Protected Routes with App Layout */}
                <Route element={
                    <ProtectedRoute>
                        <AppLayout/>
                    </ProtectedRoute> 
                    }>
                        
                    <Route path="/" element= {<Navigate to ="/Dashboard" replace />} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                    <Route path="/Cards" element={<CardPage/>} />
                    <Route path="/Expense" element={<ExpensePage/>} />
                    <Route path="/Income" element={<IncomePage/>} />
                    <Route path="/Reports" element={<ReportsPage/>} />
                    <Route path="/forecast" element={<ForecastPage />} />
                </Route>



                {/* 404 */}
                <Route path="*" element={<NotFound />} />
                
        </Routes>
    )
}