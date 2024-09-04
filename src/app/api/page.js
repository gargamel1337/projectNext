import { NextResponse } from 'next/server'

function postMethod(req, res) {
  res.status(200).json({ success: 'zarejestrowales sie pomyslnie!' });
}
export default function handler(req, res) {
  switch (req.method) {
    case "POST": {
      return postMethod(req, res);
    }
    default: {
      NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
  }
}
