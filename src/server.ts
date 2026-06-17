import fastify from 'fastify';
import cors from '@fastify/cors';

const server = fastify({
    logger: true,
});
server.register(cors,{origin: '*'});

const teams = [
    { id: 1, name: 'Ferrari', base: 'Maranello, Itália' },
    { id: 2, name: 'Red Bull Racing', base: 'Milton Keynes, Inglaterra' },
    { id: 3, name: 'Mercedes', base: 'Brackley, Inglaterra' },
    { id: 4, name: 'McLaren', base: 'Woking, Inglaterra' },
    { id: 5, name: 'Aston Martin', base: 'Silverstone, Inglaterra' },
    { id: 6, name: 'Alpine', base: 'Enstone, Inglaterra' },
    { id: 7, name: 'Williams', base: 'Grove, Inglaterra' },
    { id: 8, name: 'Racing Bulls', base: 'Faenza, Itália' },
    { id: 9, name: 'Kick Sauber', base: 'Hinwil, Suíça' },
    { id: 10, name: 'Haas', base: 'Kannapolis, Estados Unidos' },
    { id: 11, name: 'Cadillac', base: 'Fishers, Indiana, Estados Unidos' },
];

const drivers =  [
    { id: 1, name: 'Charles Leclerc', team: 'Ferrari', country: 'Mônaco' },
    { id: 2, name: 'Lewis Hamilton', team: 'Ferrari', country: 'Reino Unido' },

    { id: 3, name: 'Max Verstappen', team: 'Red Bull Racing', country: 'Países Baixos' },
    { id: 4, name: 'Yuki Tsunoda', team: 'Red Bull Racing', country: 'Japão' },

    { id: 5, name: 'George Russell', team: 'Mercedes', country: 'Reino Unido' },
    { id: 6, name: 'Andrea Kimi Antonelli', team: 'Mercedes', country: 'Itália' },

    { id: 7, name: 'Lando Norris', team: 'McLaren', country: 'Reino Unido' },
    { id: 8, name: 'Oscar Piastri', team: 'McLaren', country: 'Austrália' },

    { id: 9, name: 'Fernando Alonso', team: 'Aston Martin', country: 'Espanha' },
    { id: 10, name: 'Lance Stroll', team: 'Aston Martin', country: 'Canadá' },

    { id: 11, name: 'Pierre Gasly', team: 'Alpine', country: 'França' },
    { id: 12, name: 'Franco Colapinto', team: 'Alpine', country: 'Argentina' },

    { id: 13, name: 'Alexander Albon', team: 'Williams', country: 'Tailândia' },
    { id: 14, name: 'Carlos Sainz', team: 'Williams', country: 'Espanha' },

    { id: 15, name: 'Liam Lawson', team: 'Racing Bulls', country: 'Nova Zelândia' },
    { id: 16, name: 'Isack Hadjar', team: 'Racing Bulls', country: 'França' },

    { id: 17, name: 'Nico Hülkenberg', team: 'Kick Sauber', country: 'Alemanha' },
    { id: 18, name: 'Gabriel Bortoleto', team: 'Kick Sauber', country: 'Brasil' },

    { id: 19, name: 'Esteban Ocon', team: 'Haas', country: 'França' },
    { id: 20, name: 'Oliver Bearman', team: 'Haas', country: 'Reino Unido' },

    { id: 21, name: 'Sergio Pérez', team: 'Cadillac', country: 'México' },
    { id: 22, name: 'Valtteri Bottas', team: 'Cadillac', country: 'Finlândia' },
];

interface TeamRequest {
    id: string;
}

server.get('/teams', async (request, response) => {
    response.type('application/json').code(200);
    return { teams };
});

server.get<{ Params: TeamRequest }>('/teams/:id', async (request, response) => {
    const teamId = parseInt(request.params.id);
    const team = teams.find((t) => t.id === teamId);
    if (!team) {
        response.type('application/json').code(404);
        return { error: 'Team not found' };
    }
    response.type('application/json').code(200);
    return { team };
});

server.get('/drivers', async(request, response) => {
    response.type('application/json').code(200);
    return { drivers };  
});

interface DriverRequest {
    id: string;
}

server.get<{ Params: DriverRequest }>('/drivers/:id', async(request, response) => {
    const driverId = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === driverId);
    if (!driver) {
        response.type('application/json').code(404);
        return { error: 'Driver not found' };
    }
    response.type('application/json').code(200);
    return { driver };
});

server.listen({port: Number(process.env.PORT)}, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});