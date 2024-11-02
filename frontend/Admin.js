import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const AdminDashboard = () => {
    const [analyticsData, setAnalyticsData] = useState({
        bookings: [],
        revenue: [],
    });

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            const response = await axios.get('/api/analytics'); // Backend API to fetch analytics
            setAnalyticsData(response.data);
        };

        fetchAnalyticsData();
    }, []);

    const data = {
        labels: analyticsData.bookings.map(item => item.date),
        datasets: [
            {
                label: 'Bookings',
                data: analyticsData.bookings.map(item => item.count),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Revenue',
                data: analyticsData.revenue.map(item => item.amount),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <Bar data={data} />
        </div>
    );
};

export default AdminDashboard;
